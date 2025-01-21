import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo32Component } from './lib98-demo32.component';

describe('Lib98Demo32Component', () => {
  let component: Lib98Demo32Component;
  let fixture: ComponentFixture<Lib98Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
