import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo31Component } from './lib31-demo31.component';

describe('Lib31Demo31Component', () => {
  let component: Lib31Demo31Component;
  let fixture: ComponentFixture<Lib31Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
