import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo39Component } from './lib9-demo39.component';

describe('Lib9Demo39Component', () => {
  let component: Lib9Demo39Component;
  let fixture: ComponentFixture<Lib9Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
