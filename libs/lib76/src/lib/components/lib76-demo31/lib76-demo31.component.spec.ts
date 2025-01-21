import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo31Component } from './lib76-demo31.component';

describe('Lib76Demo31Component', () => {
  let component: Lib76Demo31Component;
  let fixture: ComponentFixture<Lib76Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
