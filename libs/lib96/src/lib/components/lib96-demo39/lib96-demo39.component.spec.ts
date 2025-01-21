import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo39Component } from './lib96-demo39.component';

describe('Lib96Demo39Component', () => {
  let component: Lib96Demo39Component;
  let fixture: ComponentFixture<Lib96Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
