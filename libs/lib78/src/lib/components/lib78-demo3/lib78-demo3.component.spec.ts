import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo3Component } from './lib78-demo3.component';

describe('Lib78Demo3Component', () => {
  let component: Lib78Demo3Component;
  let fixture: ComponentFixture<Lib78Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
