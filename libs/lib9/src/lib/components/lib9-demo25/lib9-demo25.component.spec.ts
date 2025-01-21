import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo25Component } from './lib9-demo25.component';

describe('Lib9Demo25Component', () => {
  let component: Lib9Demo25Component;
  let fixture: ComponentFixture<Lib9Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
