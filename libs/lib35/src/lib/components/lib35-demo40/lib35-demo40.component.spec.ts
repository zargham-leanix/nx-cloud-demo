import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo40Component } from './lib35-demo40.component';

describe('Lib35Demo40Component', () => {
  let component: Lib35Demo40Component;
  let fixture: ComponentFixture<Lib35Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
