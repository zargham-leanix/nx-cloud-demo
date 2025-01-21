import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo49Component } from './lib35-demo49.component';

describe('Lib35Demo49Component', () => {
  let component: Lib35Demo49Component;
  let fixture: ComponentFixture<Lib35Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
