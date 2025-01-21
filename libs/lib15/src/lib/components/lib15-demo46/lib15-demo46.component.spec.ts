import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo46Component } from './lib15-demo46.component';

describe('Lib15Demo46Component', () => {
  let component: Lib15Demo46Component;
  let fixture: ComponentFixture<Lib15Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
