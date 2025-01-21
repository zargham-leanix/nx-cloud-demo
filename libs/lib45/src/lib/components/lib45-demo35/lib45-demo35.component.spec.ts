import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo35Component } from './lib45-demo35.component';

describe('Lib45Demo35Component', () => {
  let component: Lib45Demo35Component;
  let fixture: ComponentFixture<Lib45Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
