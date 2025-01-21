import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo33Component } from './lib98-demo33.component';

describe('Lib98Demo33Component', () => {
  let component: Lib98Demo33Component;
  let fixture: ComponentFixture<Lib98Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
