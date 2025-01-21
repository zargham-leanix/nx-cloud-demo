import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo46Component } from './lib9-demo46.component';

describe('Lib9Demo46Component', () => {
  let component: Lib9Demo46Component;
  let fixture: ComponentFixture<Lib9Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
