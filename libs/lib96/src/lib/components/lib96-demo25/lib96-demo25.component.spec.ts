import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo25Component } from './lib96-demo25.component';

describe('Lib96Demo25Component', () => {
  let component: Lib96Demo25Component;
  let fixture: ComponentFixture<Lib96Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
