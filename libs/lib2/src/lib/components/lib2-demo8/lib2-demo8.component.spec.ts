import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo8Component } from './lib2-demo8.component';

describe('Lib2Demo8Component', () => {
  let component: Lib2Demo8Component;
  let fixture: ComponentFixture<Lib2Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
