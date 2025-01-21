import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo35Component } from './lib31-demo35.component';

describe('Lib31Demo35Component', () => {
  let component: Lib31Demo35Component;
  let fixture: ComponentFixture<Lib31Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
