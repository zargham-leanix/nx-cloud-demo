import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo8Component } from './lib15-demo8.component';

describe('Lib15Demo8Component', () => {
  let component: Lib15Demo8Component;
  let fixture: ComponentFixture<Lib15Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
