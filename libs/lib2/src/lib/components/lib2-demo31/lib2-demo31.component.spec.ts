import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo31Component } from './lib2-demo31.component';

describe('Lib2Demo31Component', () => {
  let component: Lib2Demo31Component;
  let fixture: ComponentFixture<Lib2Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
