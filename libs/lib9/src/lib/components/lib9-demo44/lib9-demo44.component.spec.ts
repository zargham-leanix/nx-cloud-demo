import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo44Component } from './lib9-demo44.component';

describe('Lib9Demo44Component', () => {
  let component: Lib9Demo44Component;
  let fixture: ComponentFixture<Lib9Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
