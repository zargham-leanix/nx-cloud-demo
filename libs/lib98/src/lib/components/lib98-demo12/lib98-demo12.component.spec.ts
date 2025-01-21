import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo12Component } from './lib98-demo12.component';

describe('Lib98Demo12Component', () => {
  let component: Lib98Demo12Component;
  let fixture: ComponentFixture<Lib98Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
