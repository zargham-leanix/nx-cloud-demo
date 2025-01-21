import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo41Component } from './lib1-demo41.component';

describe('Lib1Demo41Component', () => {
  let component: Lib1Demo41Component;
  let fixture: ComponentFixture<Lib1Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
