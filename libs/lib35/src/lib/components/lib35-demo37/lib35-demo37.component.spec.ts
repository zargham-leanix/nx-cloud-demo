import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo37Component } from './lib35-demo37.component';

describe('Lib35Demo37Component', () => {
  let component: Lib35Demo37Component;
  let fixture: ComponentFixture<Lib35Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
