import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo9Component } from './lib35-demo9.component';

describe('Lib35Demo9Component', () => {
  let component: Lib35Demo9Component;
  let fixture: ComponentFixture<Lib35Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
