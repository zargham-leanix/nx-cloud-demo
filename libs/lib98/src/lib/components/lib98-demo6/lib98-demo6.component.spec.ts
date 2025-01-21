import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo6Component } from './lib98-demo6.component';

describe('Lib98Demo6Component', () => {
  let component: Lib98Demo6Component;
  let fixture: ComponentFixture<Lib98Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
