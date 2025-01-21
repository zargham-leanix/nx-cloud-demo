import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo35Component } from './lib35-demo35.component';

describe('Lib35Demo35Component', () => {
  let component: Lib35Demo35Component;
  let fixture: ComponentFixture<Lib35Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
