import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo41Component } from './lib3-demo41.component';

describe('Lib3Demo41Component', () => {
  let component: Lib3Demo41Component;
  let fixture: ComponentFixture<Lib3Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
