import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo21Component } from './lib35-demo21.component';

describe('Lib35Demo21Component', () => {
  let component: Lib35Demo21Component;
  let fixture: ComponentFixture<Lib35Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
