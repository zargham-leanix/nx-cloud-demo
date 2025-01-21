import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo15Component } from './lib98-demo15.component';

describe('Lib98Demo15Component', () => {
  let component: Lib98Demo15Component;
  let fixture: ComponentFixture<Lib98Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
