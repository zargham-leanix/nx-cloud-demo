import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo25Component } from './lib2-demo25.component';

describe('Lib2Demo25Component', () => {
  let component: Lib2Demo25Component;
  let fixture: ComponentFixture<Lib2Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
