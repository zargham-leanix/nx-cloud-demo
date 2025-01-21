import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo7Component } from './lib35-demo7.component';

describe('Lib35Demo7Component', () => {
  let component: Lib35Demo7Component;
  let fixture: ComponentFixture<Lib35Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
