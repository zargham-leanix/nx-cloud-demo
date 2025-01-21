import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo27Component } from './lib35-demo27.component';

describe('Lib35Demo27Component', () => {
  let component: Lib35Demo27Component;
  let fixture: ComponentFixture<Lib35Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
