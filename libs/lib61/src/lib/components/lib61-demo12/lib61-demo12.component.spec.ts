import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo12Component } from './lib61-demo12.component';

describe('Lib61Demo12Component', () => {
  let component: Lib61Demo12Component;
  let fixture: ComponentFixture<Lib61Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
