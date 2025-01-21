import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo25Component } from './lib15-demo25.component';

describe('Lib15Demo25Component', () => {
  let component: Lib15Demo25Component;
  let fixture: ComponentFixture<Lib15Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
