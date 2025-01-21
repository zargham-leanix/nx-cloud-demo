import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo8Component } from './lib96-demo8.component';

describe('Lib96Demo8Component', () => {
  let component: Lib96Demo8Component;
  let fixture: ComponentFixture<Lib96Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
