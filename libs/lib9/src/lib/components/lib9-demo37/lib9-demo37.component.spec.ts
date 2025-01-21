import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo37Component } from './lib9-demo37.component';

describe('Lib9Demo37Component', () => {
  let component: Lib9Demo37Component;
  let fixture: ComponentFixture<Lib9Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
