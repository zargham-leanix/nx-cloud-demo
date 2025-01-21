import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo11Component } from './lib98-demo11.component';

describe('Lib98Demo11Component', () => {
  let component: Lib98Demo11Component;
  let fixture: ComponentFixture<Lib98Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
