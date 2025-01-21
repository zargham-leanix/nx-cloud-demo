import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo48Component } from './lib9-demo48.component';

describe('Lib9Demo48Component', () => {
  let component: Lib9Demo48Component;
  let fixture: ComponentFixture<Lib9Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
