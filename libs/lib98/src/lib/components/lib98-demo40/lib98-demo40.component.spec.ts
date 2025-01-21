import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo40Component } from './lib98-demo40.component';

describe('Lib98Demo40Component', () => {
  let component: Lib98Demo40Component;
  let fixture: ComponentFixture<Lib98Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
