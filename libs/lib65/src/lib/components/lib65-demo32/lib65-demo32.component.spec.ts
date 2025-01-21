import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo32Component } from './lib65-demo32.component';

describe('Lib65Demo32Component', () => {
  let component: Lib65Demo32Component;
  let fixture: ComponentFixture<Lib65Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
