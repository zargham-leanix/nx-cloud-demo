import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo46Component } from './lib2-demo46.component';

describe('Lib2Demo46Component', () => {
  let component: Lib2Demo46Component;
  let fixture: ComponentFixture<Lib2Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
