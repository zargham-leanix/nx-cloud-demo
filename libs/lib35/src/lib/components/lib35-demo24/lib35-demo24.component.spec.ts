import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo24Component } from './lib35-demo24.component';

describe('Lib35Demo24Component', () => {
  let component: Lib35Demo24Component;
  let fixture: ComponentFixture<Lib35Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
