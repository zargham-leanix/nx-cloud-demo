import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo29Component } from './lib9-demo29.component';

describe('Lib9Demo29Component', () => {
  let component: Lib9Demo29Component;
  let fixture: ComponentFixture<Lib9Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
