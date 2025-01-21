import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo31Component } from './lib96-demo31.component';

describe('Lib96Demo31Component', () => {
  let component: Lib96Demo31Component;
  let fixture: ComponentFixture<Lib96Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
