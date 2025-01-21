import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo35Component } from './lib34-demo35.component';

describe('Lib34Demo35Component', () => {
  let component: Lib34Demo35Component;
  let fixture: ComponentFixture<Lib34Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
