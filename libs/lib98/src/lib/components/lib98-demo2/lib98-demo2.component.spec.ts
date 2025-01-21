import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo2Component } from './lib98-demo2.component';

describe('Lib98Demo2Component', () => {
  let component: Lib98Demo2Component;
  let fixture: ComponentFixture<Lib98Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
