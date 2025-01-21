import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo45Component } from './lib98-demo45.component';

describe('Lib98Demo45Component', () => {
  let component: Lib98Demo45Component;
  let fixture: ComponentFixture<Lib98Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
