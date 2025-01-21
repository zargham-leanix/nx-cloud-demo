import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo35Component } from './lib23-demo35.component';

describe('Lib23Demo35Component', () => {
  let component: Lib23Demo35Component;
  let fixture: ComponentFixture<Lib23Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
