import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo46Component } from './lib96-demo46.component';

describe('Lib96Demo46Component', () => {
  let component: Lib96Demo46Component;
  let fixture: ComponentFixture<Lib96Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
