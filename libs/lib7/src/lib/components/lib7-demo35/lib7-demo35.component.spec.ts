import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo35Component } from './lib7-demo35.component';

describe('Lib7Demo35Component', () => {
  let component: Lib7Demo35Component;
  let fixture: ComponentFixture<Lib7Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
