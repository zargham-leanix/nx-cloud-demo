import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo31Component } from './lib1-demo31.component';

describe('Lib1Demo31Component', () => {
  let component: Lib1Demo31Component;
  let fixture: ComponentFixture<Lib1Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
