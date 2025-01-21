import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo7Component } from './lib9-demo7.component';

describe('Lib9Demo7Component', () => {
  let component: Lib9Demo7Component;
  let fixture: ComponentFixture<Lib9Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
