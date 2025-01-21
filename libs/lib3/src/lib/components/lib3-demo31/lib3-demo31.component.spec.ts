import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo31Component } from './lib3-demo31.component';

describe('Lib3Demo31Component', () => {
  let component: Lib3Demo31Component;
  let fixture: ComponentFixture<Lib3Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
