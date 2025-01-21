import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo12Component } from './lib33-demo12.component';

describe('Lib33Demo12Component', () => {
  let component: Lib33Demo12Component;
  let fixture: ComponentFixture<Lib33Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
