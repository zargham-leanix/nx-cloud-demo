import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo35Component } from './lib65-demo35.component';

describe('Lib65Demo35Component', () => {
  let component: Lib65Demo35Component;
  let fixture: ComponentFixture<Lib65Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
